"use client";

import { useState } from "react";
import { DashboardShell } from "../dashboard/shell";
import { Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock  orders data
const initialOrders = [
  {
    id: "PZA001",
    customer: "John Doe",
    type: "Margherita",
    quantity: 2,
    date: "2023-10-15 14:30",
    status: "Delivered",
  },
  {
    id: "PZA002",
    customer: "Jane Smith",
    type: "Pepperoni",
    quantity: 1,
    date: "2023-10-16 18:45",
    status: "Preparing",
  },
  {
    id: "PZA003",
    customer: "Mike Johnson",
    type: "Veggie Supreme",
    quantity: 3,
    date: "2023-10-17 12:15",
    status: "Pending",
  },
  {
    id: "PZA004",
    customer: "Sarah Williams",
    type: "Hawaiian",
    quantity: 1,
    date: "2023-10-17 19:20",
    status: "Out for Delivery",
  },
  {
    id: "PZA005",
    customer: "David Brown",
    type: "Meat Lovers",
    quantity: 2,
    date: "2023-10-18 11:00",
    status: "Cancelled",
  },
];

export default function Ordershandling({ user }) {
  const [orders, setOrders] = useState(initialOrders);
  const [filters, setFilters] = useState({ status: "all", search: "" });

  const [newOrder, setNewOrder] = useState({
    customer: "",
    type: "Margherita",
    quantity: 1,
    status: "Pending",
  });

  const filteredOrders = orders.filter((order) => {
    return (
      (filters.status === "all" || order.status === filters.status) &&
      (filters.search === "" ||
        order.customer.toLowerCase().includes(filters.search.toLowerCase()) ||
        order.id.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = `PZA${(orders.length + 1001).toString().slice(1)}`;
    const date = new Date().toISOString().slice(0, 16).replace("T", " ");

    setOrders([
      ...orders,
      {
        id: newId,
        customer: newOrder.customer,
        type: newOrder.type,
        quantity: newOrder.quantity,
        date: date,
        status: newOrder.status,
      },
    ]);

    // Reset form
    setNewOrder({
      customer: "",
      type: "Margherita",
      quantity: 1,
      status: "Pending",
    });
  };

  const StatusBadge = ({ status }) => {
    const statusColors = {
      Pending: "bg-gray-500/20 text-gray-200",
      Preparing: "bg-yellow-500/20 text-gray-200",
      "Out for Delivery": "bg-blue-500/20 text-gray-200",
      Delivered: "bg-green-500/20 text-gray-200",
      Cancelled: "bg-red-500/20 text-gray-200",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <>
      <DashboardShell user={user} />
      <div className="space-y-8 bg-black p-6 h-screen">
        
        <div className="flex justify-between items-center border-b border-gray-800 pb-4">
          <h1 className="text-3xl font-bold text-gray-200">
            <span className="text-rose-500">Order</span> Management
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input
                placeholder="Search orders..."
                className="bg-gray-900 border-gray-800 text-gray-200 placeholder-gray-500 pl-10"
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <Select
              value={filters.status}
              onValueChange={(value) =>
                setFilters({ ...filters, status: value })
              }
            >
              <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800 text-gray-200">
                <SelectValue placeholder="Filter status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-800">
                <SelectItem
                  value="all"
                  className="text-gray-200 hover:bg-gray-800"
                >
                  All Statuses
                </SelectItem>
                <SelectItem
                  value="Pending"
                  className="text-gray-200 hover:bg-gray-800"
                >
                  Pending
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-900 border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-200">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-200">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-200">
                  Pizza Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-200">
                  Qty
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-200">
                  Order Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-200">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-900/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 font-medium">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                    {order.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* new order form thingy */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-rose-500" />
            <span className="text-rose-500">Create</span> New Order
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Customer
              </label>
              <Input
                className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-500"
                value={newOrder.customer}
                onChange={(e) =>
                  setNewOrder({ ...newOrder, customer: e.target.value })
                }
                placeholder="Enter customer name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Pizza Name
              </label>
              <Input
                className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-500"
                value={newOrder.type}
                onChange={(e) =>
                  setNewOrder({ ...newOrder, type: e.target.value })
                }
                placeholder="Enter pizza name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Quantity
              </label>
              <Input
                type="number"
                min="1"
                className="bg-gray-800 border-gray-700 text-gray-200"
                value={newOrder.quantity}
                onChange={(e) =>
                  setNewOrder({
                    ...newOrder,
                    quantity: parseInt(e.target.value),
                  })
                }
                required
              />
            </div>
            <div className="flex items-end">
              <Button
                type="submit"
                className="bg-rose-500 hover:bg-rose-600 text-gray-200"
              >
                Add Order
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
