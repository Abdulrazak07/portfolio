import { motion } from "framer-motion";
import Icons from "./Icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const productSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .max(50, {
      message: "Name must be at most 50 characters long",
    }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters long",
    })
    .max(500, {
      message: "Message must be at most 500 characters long",
    }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
});

export default function Contact() {
  const [notification, setNotification] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof productSchema>) {
    const { name, email, message } = values;
    try {
      await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      form.reset();
      setNotification({
        type: "success",
        message: "Your message has been sent successfully!",
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  }

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-4xl my-7 font-semibold text-left md:text-5xl text-black pt-20">
        Let&apos;s work together
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit) as unknown as undefined}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="py-2 md:w-1/2 md:inline-block md:pe-2 align-top">
                
                <FormControl>
                  <Input style={{ minHeight: '60px', borderRadius:'15px'}} placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="py-2 md:w-1/2 md:inline-block md:pe-2 align-top">
                <FormControl>
                  <Input style={{ minHeight: '60px', borderRadius:'15px' }} placeholder="Last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem  className="py-2">
                <FormControl>
                  <Input style={{ minHeight: '60px', borderRadius:'15px' }} placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem className="py-2">
                <FormControl>
                  <Textarea
                  style={{ minHeight: '60px', borderRadius:'15px' }} 
                    placeholder="Hello, I would like to hire you for my project..."
                    {...field}
                    value={field.value ?? ""}
                    rows={6}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-center">
            {notification && (
              <p
                className={cn(
                  notification.type === "success"
                    ? "text-green-500 dark:text-green-400"
                    : "text-destructive"
                )}
              >
                {notification.message}
              </p>
            )}
          </div>

          <Button
            disabled={form.formState.isSubmitting}
            className="group mt-2 md:mt-5"
          >
            Shoot 
            {form.formState.isSubmitting ? (
              <div className=" ms-2 h-4 w-4 animate-spin rounded-full border-b-2 border-primary-foreground group-hover:border-primary"></div>
            ) : (
              <Icons.plane className="inline-block ms-2 w-4" />
            )}
          </Button>
        </form>
      </Form>
    </motion.section>
  );
}
