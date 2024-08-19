'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FaSpinner } from 'react-icons/fa';

import Footer from '@/components/Dashboard/Footer';

const UserDetails = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  React.useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/eventDetails', {
          signal: controller.signal,
        });
        const result = await response.json();

        setData(result);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const handleDeleteClick = React.useCallback(async (id) => {
    console.log('deleting id:', id);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/eventDetails/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Event deleted');
        console.log(response);
      } else {
        console.log(response);
        console.error('Failed to delete Event');
        throw new Error('Deletion failed');
      }
    } catch (error) {
      console.error('Error deleting Event:', error);
      alert(`Error deleting event: ${error}`);
    }
  }, []);

  const columns = React.useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="bg-white"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: 'firstName',
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            First Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => <div>{row.getValue('firstName')}</div>,
        enableSorting: true,
      },
      {
        accessorKey: 'lastName',
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Last Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => <div>{row.getValue('lastName')}</div>,
        enableSorting: true,
      },
      {
        accessorKey: 'email',
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => <div>{row.getValue('email')}</div>,
        enableSorting: true,
      },
      {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
          const request = row.original;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <Link href={`/edit-user/${request._id}`}>Edit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-[#ff0000] font-bold"
                  onClick={() => handleDeleteClick(request._id)}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    [handleDeleteClick]
  );

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex-1 px-[10%] pt-4">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <div className="flex justify-center items-center h-full py-4">
                  <FaSpinner className="animate-spin text-4xl" />
                </div>
              </TableCell>
            </TableRow>
          ) : (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Footer table={table} />
    </div>
  );
};

export default UserDetails;
