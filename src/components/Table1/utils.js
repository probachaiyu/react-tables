
const startDate = new Date(2015, 0, 1);
const endDate = new Date();
new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

export const initData = [
{
      id: 1,
      name: "Product1",
      price: 120,
      quality: 0,
      satisfaction: 5,
      inStockDate: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  }, {
      id: 2,
      name: "Product2",
      price: 12,
      quality: 1,
      satisfaction: 4,
      inStockDate: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  },
  {
      id: 3,
      name: "Product3",
      price: 67,
      quality: 2,
      satisfaction: 3,
      inStockDate: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  },
  {
      id: 4,
      name: "Product4",
      price: 89,
      quality: 0,
      satisfaction: 1,
      inStockDate: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  },
  {
      id: 5,
      name: "Product5",
      price: 34,
      quality: 2,
      satisfaction: 1,
      inStockDate: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  },
  {
      id: 6,
      name: "Product6",
      price: 110,
      quality: 1,
      satisfaction: 0,
      inStockDate: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  },
  {
      id: 7,
      name: "Product7",
      price: 38,
      quality: 0,
      satisfaction: 3,
      inStockDate: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  },
  {
      id: 8,
      name: "Product8",
      price: 3,
      quality: 1,
      satisfaction: 2,
      inStockDate: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  }];

