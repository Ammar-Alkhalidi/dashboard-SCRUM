import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  // State für Orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, City 1",
      date: "2024-01-15",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Oak St, City 2",
      date: "2024-02-10",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 3,
      name: "Alice Brown",
      address: "789 Pine St, City 3",
      date: "2024-03-05",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Bob Johnson",
      address: "101 Maple St, City 4",
      date: "2024-04-20",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 5,
      name: "Charlie Davis",
      address: "202 Birch St, City 5",
      date: "2024-05-12",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 6,
      name: "Diana Evans",
      address: "303 Cedar St, City 6",
      date: "2024-06-25",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 7,
      name: "Ethan Green",
      address: "404 Walnut St, City 7",
      date: "2024-07-08",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 8,
      name: "Fiona Harris",
      address: "505 Elm St, City 8",
      date: "2024-08-30",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 9,
      name: "George White",
      address: "606 Spruce St, City 9",
      date: "2024-09-14",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 10,
      name: "Hannah King",
      address: "707 Chestnut St, City 10",
      date: "2024-10-02",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 11,
      name: "Ian Lewis",
      address: "808 Redwood St, City 11",
      date: "2024-11-17",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 12,
      name: "Jessica Hall",
      address: "909 Cypress St, City 12",
      date: "2024-12-09",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 13,
      name: "Kevin Allen",
      address: "1010 Fir St, City 13",
      date: "2024-01-22",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 14,
      name: "Laura Young",
      address: "1111 Ash St, City 14",
      date: "2024-02-28",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 15,
      name: "Michael Scott",
      address: "1212 Holly St, City 15",
      date: "2024-03-10",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 16,
      name: "Natalie Baker",
      address: "1313 Willow St, City 16",
      date: "2024-04-05",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 17,
      name: "Oliver Parker",
      address: "1414 Sycamore St, City 17",
      date: "2024-05-18",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 18,
      name: "Penelope Carter",
      address: "1515 Magnolia St, City 18",
      date: "2024-06-07",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 19,
      name: "Quentin Foster",
      address: "1616 Dogwood St, City 19",
      date: "2024-07-20",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 20,
      name: "Rachel Stewart",
      address: "1717 Beech St, City 20",
      date: "2024-08-14",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 21,
      name: "Samuel Hughes",
      address: "1818 Hickory St, City 21",
      date: "2024-09-03",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 22,
      name: "Tiffany Russell",
      address: "1919 Juniper St, City 22",
      date: "2024-10-28",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 23,
      name: "Ulysses Murray",
      address: "2020 Alder St, City 23",
      date: "2024-11-15",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 24,
      name: "Victoria Ward",
      address: "2121 Poplar St, City 24",
      date: "2024-12-06",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 25,
      name: "Walter Collins",
      address: "2222 Aspen St, City 25",
      date: "2024-01-12",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 26,
      name: "Xenia Torres",
      address: "2323 Sequoia St, City 26",
      date: "2024-02-24",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 27,
      name: "Yvonne Griffin",
      address: "2424 Redwood St, City 27",
      date: "2024-03-19",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 28,
      name: "Zachary Wells",
      address: "2525 Pine St, City 28",
      date: "2024-04-30",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 29,
      name: "Adam Brooks",
      address: "2626 Elm St, City 29",
      date: "2024-05-07",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 30,
      name: "Bella Chapman",
      address: "2727 Birch St, City 30",
      date: "2024-06-11",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 31,
      name: "Daniel Carter",
      address: "2828 Maple St, City 31",
      date: "2024-07-14",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 32,
      name: "Emma Foster",
      address: "2929 Spruce St, City 32",
      date: "2024-08-21",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 33,
      name: "Felix Reed",
      address: "3030 Cypress St, City 33",
      date: "2024-09-18",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 34,
      name: "Grace Phillips",
      address: "3131 Poplar St, City 34",
      date: "2024-10-03",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 35,
      name: "Henry Watson",
      address: "3232 Alder St, City 35",
      date: "2024-11-27",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 36,
      name: "Isabella Coleman",
      address: "3333 Juniper St, City 36",
      date: "2024-12-15",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 37,
      name: "Jack Spencer",
      address: "3434 Aspen St, City 37",
      date: "2024-01-09",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 38,
      name: "Katherine Moore",
      address: "3535 Sequoia St, City 38",
      date: "2024-02-14",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 39,
      name: "Leo Hayes",
      address: "3636 Redwood St, City 39",
      date: "2024-03-26",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 40,
      name: "Mia Griffin",
      address: "3737 Pine St, City 40",
      date: "2024-04-22",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 41,
      name: "Nathan Cooper",
      address: "3838 Birch St, City 41",
      date: "2024-05-08",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 42,
      name: "Olivia Turner",
      address: "3939 Elm St, City 42",
      date: "2024-06-30",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 43,
      name: "Patrick Simmons",
      address: "4040 Cedar St, City 43",
      date: "2024-07-19",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 44,
      name: "Quinn Bailey",
      address: "4141 Dogwood St, City 44",
      date: "2024-08-25",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 45,
      name: "Ryan Wallace",
      address: "4242 Hickory St, City 45",
      date: "2024-09-12",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 46,
      name: "Sophia Martin",
      address: "4343 Sycamore St, City 46",
      date: "2024-10-05",
      type: "Fashion",
      status: "Processing",
    },
    {
      id: 47,
      name: "Thomas Nelson",
      address: "4444 Magnolia St, City 47",
      date: "2024-11-11",
      type: "Sports",
      status: "Rejected",
    },
    {
      id: 48,
      name: "Uma Robertson",
      address: "4545 Beech St, City 48",
      date: "2024-12-07",
      type: "Home & Kitchen",
      status: "On Hold",
    },
    {
      id: 49,
      name: "Vincent Harris",
      address: "4646 Fir St, City 49",
      date: "2024-01-23",
      type: "Electronics",
      status: "Completed",
    },
    {
      id: 50,
      name: "Willow Evans",
      address: "4747 Ash St, City 50",
      date: "2024-02-18",
      type: "Fashion",
      status: "Processing",
    },
  ]);

  // Context Provider
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  return useContext(OrderContext);
};
