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
import { ArrowLeftIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { countries } from "@/lib/countries";

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
                <FormLabel hasValue={!!field.value}>First name</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input {...field} />
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
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
                <span className="text-foreground/60">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
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
              <FormLabel hasValue={!!field.value}>
                Phone number{" "}
                <span className="text-foreground/60">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4 justify-between items-center">
          <Link
            href="/cart"
            tabIndex={-1}
            className="focus:outline-none focus-visible:outline-none"
          >
            <Button
              size="lg"
              variant="secondary"
              className="py-6 transform transition duration-200 ease-in-out group"
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
