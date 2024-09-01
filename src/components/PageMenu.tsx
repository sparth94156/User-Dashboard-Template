"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { EnvelopeOpenIcon, FilePlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export type Payment = {
  name: string;
  status: "pending" | "processing" | "Active" | "failed";
  price: string;
  total_sales: number;
  created_at: string;
};
const data: Payment[] = [
  {
    name: "Smartphone X Pro",
    status: "Active",
    price: "$999.00",
    total_sales: 150,
    created_at: "6/23/2024",
  },
  {
    name: "Wireless Earbuds Ultra",
    status: "Active",
    price: "$199.00",
    total_sales: 300,
    created_at: "6/23/2024",
  },
  {
    name: "Smart Home Hub",
    status: "Active",
    price: "$949.00",
    total_sales: 200,
    created_at: "6/23/2024",
  },
  {
    name: "4K Ultra HD Smart TV",
    status: "Active",
    price: "$999.00",
    total_sales: 150,
    created_at: "6/23/2024",
  },
  {
    name: "Smartphone X Pro",
    status: "Active",
    price: "$999.00",
    total_sales: 150,
    created_at: "6/23/2024",
  },
  {
    name: "Smartphone X Pro",
    status: "Active",
    price: "$999.00",
    total_sales: 150,
    created_at: "6/23/2024",
  },
  {
    name: "Smartphone X Pro",
    status: "Active",
    price: "$999.00",
    total_sales: 150,
    created_at: "6/23/2024",
  },
  {
    name: "Smartphone X Pro",
    status: "Active",
    price: "$999.00",
    total_sales: 150,
    created_at: "6/23/2024",
  },
  {
    name: "Smartphone X Pro",
    status: "Active",
    price: "$999.00",
    total_sales: 150,
    created_at: "6/23/2024",
  },

  // ...
];

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="font-semibold">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("price")}</div>
    ),
  },
  {
    accessorKey: "total_sales",
    header: "Total sales",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("total_sales")}</div>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Created at",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("created_at")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const PageMenu = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

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
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex p-4 ml-[46px] overflow-hidden">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="w-[1200px] flex justify-between">
            <div className="flex">
              <TabsTrigger value="account">All</TabsTrigger>
              <TabsTrigger value="password">Active</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </div>
            <div className="flex mr-2 gap-x-2">
              <Button className="bg-white text-black px-2 py-0.5 border rounded-lg hover:bg-slate-200 border-neutral-300">
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Export
              </Button>
              <Button className="bg-black text-white px-2 py-0.5 border rounded-lg hover:bg-slate-900 border-neutral-300">
                <FilePlusIcon className="mr-1.8 h-4 w-4" /> Add products
              </Button>
            </div>
        </TabsList>
        <TabsContent value="account">
          <div className="rounded-md border w-[1190px] bg-white p-4">
            <h1 className="text-2xl font-semibold">Products</h1>
            <p className="text-sm text-neutral-400">
              Manage your products and view their sales performance.
            </p>
            <Table className="mt-4">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password"></TabsContent>
        <TabsContent value="draft"></TabsContent>
        <TabsContent value="archived"></TabsContent>
      </Tabs>
    </div>
  );
};

export default PageMenu;
