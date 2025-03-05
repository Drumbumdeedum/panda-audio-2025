"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeftIcon, LoaderCircle, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { countries } from "@/lib/countries";
import { useState } from "react";
import { useProductCartStore } from "@/store/cart";
import { toast } from "sonner";
import OrderSuccess from "./order-success";
import useFilteredAndSortedProductsInCart from "@/hooks/useFilteredAndSortedProductsInCart";

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL!;

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "Please enter your first name",
  }),
  lastName: z.string().min(1, {
    message: "Please enter your last name",
  }),
  country: z.string().min(1, {
    message: "Please select a country",
  }),
  city: z.string().min(1, {
    message: "Please enter a city",
  }),
  postalCode: z.string().min(1, {
    message: "Please enter a valid postal code",
  }),
  streetAndNumber: z.string().min(1, {
    message: "Please enter a street name and a street number",
  }),
  addressLine2: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().trim().min(1, {
    message: "Please enter a phone number",
  }),
});

function ShippingDetailsForm() {
  const { clearCart } = useProductCartStore();
  const products = useFilteredAndSortedProductsInCart();
  const [loading, setLoading] = useState<boolean>(false);
  const [orderSuccessful, setOrderSuccessful] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      postalCode: "",
      streetAndNumber: "",
      addressLine2: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (loading) return;
    setLoading(true);

    const orderDetails = products.map((product) => {
      return { name: product.name, quantity: product.amount };
    });
    const requestBody = {
      shippingDetails: values,
      orderDetails,
    };
    console.log(JSON.stringify(requestBody));
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setOrderSuccessful(true);
        clearCart();
        form.reset();
      } else {
        toast.error(
          "Something went wrong. Please try again later, or contact us at info@panda-audio.com."
        );
      }
    } catch (error) {
      toast.error(
        "Something went wrong. Please try again later, or contact us at info@panda-audio.com."
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {orderSuccessful && <OrderSuccess />}
      {!orderSuccessful && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-between gap-2 sm:gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel hasValue={!!field.value}>First name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel hasValue={!!field.value}>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel hasValue={!!field.value}>Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={loading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.label} value={country.label}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hasValue={!!field.value}>City</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hasValue={!!field.value}>Postal code</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="streetAndNumber"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hasValue={!!field.value}>Address Line 1</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="addressLine2"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hasValue={!!field.value}>
                    Address Line 2{" "}
                    <span className="text-foreground/60 text-xs">
                      (optional)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hasValue={!!field.value}>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel hasValue={!!field.value}>Phone number</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/cart"
                tabIndex={-1}
                className="focus:outline-none focus-visible:outline-none w-full"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="py-6 transform transition duration-200 ease-in-out group w-full"
                  disabled={loading}
                >
                  <ArrowLeftIcon className="transition-transform group-hover:-translate-x-1" />
                  Back to cart
                </Button>
              </Link>
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full font-bold"
                disabled={loading}
              >
                {!loading && (
                  <>
                    <ShoppingCartIcon className="mr-1 h-4 w-4" />
                    Place order
                  </>
                )}
                {loading && (
                  <>
                    <LoaderCircle
                      size={32}
                      className="h-12 w-12 transition-transform animate-spin"
                    />
                    <small>Processing...</small>
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}

export default ShippingDetailsForm;
