import React, { useEffect, useState } from 'react';
import { ModalResPreliminar } from '../../../views/Ejecucion/Components/Conjuntas';
import useModal from '../../../hooks/useModal';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { defaultDataObservaciones } from '../../../utils/DataObservaciones';
import classNames from 'classnames';
import { rankItem } from '@tanstack/match-sorter-utils';

// ---------------Iconos------------------
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronUpDownIcon,
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

// Funcions--------------------------------------------------------------------------------
const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({ itemRank });

  return itemRank.passed;
};

const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
  const [value, setValue] = useState(keyWord);
  // console.log(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Filterd');
      onChange(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const OnceavoPaso = () => {
  const [data, setData] = useState(defaultDataObservaciones);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const { modal, onHandleModal } = useModal();

  const columns = [
    {
      accessorKey: 'Dependencia o Entidad',
      header: () => <span>Dependencia o Entidad</span>,
      cell: (info) => <span className="font-bold">{info.getValue()}</span>,
    },
    {
      accessorKey: 'No. de Resultado',
      header: () => <span>No. de Resultado</span>,
      cell: (info) => <span className="font-bold">{info.getValue()}</span>,
    },
    {
      accessorKey: 'Monto observado',
      header: () => <span>Monto observado</span>,
    },
    {
      accessorKey: 'Cuantificado',
      header: () => <span>Cuantificado</span>,
    },
    {
      accessorKey: 'Archivo',
      header: () => <span>Archivo</span>,
    },
    {
      accessorKey: 'actions',
      header: 'Acciones',
      cell: (info) => {
        return (
          <div className="space-x-2">
            <button className="text-red-600 text-xl">
              {' '}
              <MdDelete />{' '}
            </button>
            <button className="text-blue-600 text-xl">
              {' '}
              <FaEdit />
            </button>
          </div>
        );
      },
      enableSorting: false,
    },
  ];

  const getStateTable = () => {
    const totalRows = table.getFilteredRowModel().rows.length;
    const pageSize = table.getState().pagination.pageSize;
    const pageIndex = table.getState().pagination.pageIndex;
    const rowsPerPage = table.getRowModel().rows.length;

    const firstIndex = pageIndex * pageSize + 1;
    const lastIndex = pageIndex * pageSize + rowsPerPage;

    return {
      totalRows,
      firstIndex,
      lastIndex,
    };
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (
    <div className="px-6 py-4">
      <div className="flex-1">
        <h1 className="text-3xl">Anánilis de Resultados Preliminares</h1>
        <div>
          <p>Listado de Resultados Preliminares en General</p>
        </div>
        <div>
          <label htmlFor="" className="text-red-400 font-semibold">
            No. de Auditoria:
          </label>
        </div>
      </div>
      <div className="my-2 flex justify-end">
        <div className="relative">
          <Link onClick={() => onHandleModal(true)}>
            <div
              className="bg-green-400 p-2 rounded-lg mb-3 flex items-center justify-center cursor-pointer hover:bg-green-500
          "
            >
              <AiFillPlusCircle className="text-white mr-2 text-lg" />
              <button className="text-white font-semibold">Crear Oficio</button>
            </div>
          </Link>
          <DebouncedInput
            type="text"
            value={globalFilter ?? ''}
            onChange={(value) => setGlobalFilter(String(value))}
            className="px-6 py-2 text-gray-600 border border-gray-300 rounded outline-red-700"
            placeholder="Buscar..."
          />
        </div>
      </div>

      {modal === true && <ModalResPreliminar />}

      <div className="overflow-auto">
        <table className="table-auto w-full min-w-[560px]">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-gray-300 text-gray-600 bg-gray-100"
              >
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="py-2 px-4 text-left uppercase">
                    {header.isPlaceholder ? null : (
                      <div
                        className={classNames({
                          'cursor-pointer select-none flex justify-between':
                            header.column.getCanSort(),
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <BarsArrowUpIcon className="w-5 h-5" />,
                          desc: <BarsArrowDownIcon className="w-5 h-5" />,
                        }[header.column.getIsSorted()] ??
                          (header.column.getCanSort() ? (
                            <ChevronUpDownIcon className="w-5 h-5" />
                          ) : null)}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="text-gray-600 hover:bg-slate-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-2 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 md:flex items-center justify-between space-y-4 text-center">
        <div className="flex items-center gap-2">
          <button
            className="text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          </button>
          <button
            className="text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {table.getPageOptions().map((value, key) => (
            <button
              key={key}
              className={classNames({
                'text-gray-600 bg-gray-200 py-0.5 px-2 font-bold rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300': true,
                'bg-red-200 text-red-700':
                  value === table.getState().pagination.pageIndex,
              })}
              onClick={() => table.setPageIndex(value)}
            >
              {value + 1}
            </button>
          ))}

          <button
            className="text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
          <button
            className="text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronDoubleRightIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="text-gray-600 font-semibold">
          Mostrando de {getStateTable().firstIndex}&nbsp; a{' '}
          {getStateTable().lastIndex}&nbsp; del total de{' '}
          {getStateTable().totalRows} registros
        </div>
        <select
          className="text-gray-600 border border-gray-300 rounded outline-red-700 py-2"
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          <option value="5">5 pág.</option>
          <option value="10">10 pág.</option>
          <option value="20">20 pág.</option>
          <option value="25">25 pág.</option>
          <option value="50">50 pág.</option>
        </select>
      </div>
    </div>
  );
};
