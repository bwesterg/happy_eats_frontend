import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();
  // console.log(orders);

  if (isLoading) {
    return "This website is using Render's free tier. You may \n\
    need to reload if you see this message for more than 30 seconds";
  }

  if (!orders || orders.length === 0) {
    return "Orders not found";
  }

  return (
    <div className="space-y-10">
      {orders.map((order)=> (
        <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16/5}>
              <img src={order.restaurant.imageUrl} className="rounded-md object-cover h-full w-full" />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  )
};

export default OrderStatusPage;