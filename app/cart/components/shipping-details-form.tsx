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
import { CountrySelector } from "@/components/ui/country-selector";
import { ArrowLeftIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

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
  phone: z.string().optional(),
});

function ShippingDetailsForm() {
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-between gap-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
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
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
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
            <FormItem className="flex-1">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <CountrySelector
                  {...field}
                  onSelect={(value) => field.onChange(value)}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} />
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
              <FormLabel>Postal code</FormLabel>
              <FormControl>
                <Input placeholder="Postal code" {...field} />
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
              <FormLabel>Address Line 1</FormLabel>
              <FormControl>
                <Input placeholder="Street and number" {...field} />
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
              <FormLabel>
                Address Line 2{" "}
                <span className="text-foreground/60">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Apartment, Suite, Unit, etc." {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
              <FormLabel>
                Phone number{" "}
                <span className="text-foreground/60">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4 justify-between items-center">
          <Link href="/cart">
            <Button
              size="lg"
              variant="secondary"
              className="py-6 hover:scale-105 transform transition duration-200 ease-in-out"
            >
              <ArrowLeftIcon />
              Back to cart
            </Button>
          </Link>
          <Button
            type="submit"
            variant="cta"
            size="lg"
            className="w-full font-bold"
          >
            <ShoppingCartIcon className="mr-1 h-4 w-4" />
            Place order
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ShippingDetailsForm;
