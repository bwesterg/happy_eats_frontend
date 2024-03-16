import { z } from "zod";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  restaurantName: z.string({
    required_error: "Restaurant name is mandatory",
  }),
  restaurantCity: z.string({
    required_error: "City name is mandatory",
  }),
  restaurantState: z.string({
    required_error: "State name is mandatory",
  }),
  restaurantCountry: z.string({
    required_error: "Country name is mandatory",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "Delivery price is mandatory",
    invalid_type_error: "Should be a number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Est. Delivery time is mandatory",
    invalid_type_error: "Should be a number",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "At least one item is mandatory",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Name is mandatory"),
      price: z.coerce.number().min(1, "Price is mandatory")
    })
  ),
  imageFile: z.instanceof(File, { message: "Image is mandatory" }),
});

type restaurantFormData = z.infer<typeof formSchema>

type Props = {
  onSave: (ManageRestaurantForm: FormData) => void;
  isloading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }]
    },
  });

  const onSubmit = (formDataJson: restaurantFormData) => {
    //todo: convert formDataJson to a new FormData object
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  )
};

export default ManageRestaurantForm;