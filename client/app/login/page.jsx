"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PenLine, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Por favor, insira um email")
    .email("Por favor, insira um email valido!!"),
  password: z
    .string()
    .min(1, "Por favor, insira um senha")
    .min(8, "A senha deve ter no mínimo 8 caracteres.")
    .refine(
      (password) => /[a-z]/.test(password),
      "A senha deve conter pelo menos uma letra minúscula."
    )
    .refine(
      (password) => /[A-Z]/.test(password),
      "A senha deve conter pelo menos uma letra maiúscula."
    )
    .refine(
      (password) => /\d/.test(password),
      "A senha deve conter pelo menos um número."
    )
    .refine(
      (password) => /[@$!#%.*?&]/.test(password),
      "A senha deve conter pelo menos um caractere especial."
    ),
});

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errorServer, setErrorServer] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Função de submissão
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      fetch("http://localhost:3001/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(function (response) {
          console.log(response)
          return response.json();
        })
        .then(function (data) {
          setErrorServer(data.message)
        });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center  bg-black  sm:px-6 lg:px-8  ">
      <div className=" w-[350px] items-center justify-center bg-white rounded-xl    pl-2">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto m-4">
          <PenLine className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>
              <label htmlFor="email" className="sr-only bg-black bg-opacity-0">
                Email address
              </label>
              <input
                {...register("email")}
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                className="bg-black bg-opacity-0 relative block w-72 px-3 py-2 border-b border-black placeholder-black text-black focus:outline-none focus:ring-red-600 duration-500 focus:border-red-600 focus:z-10 sm:text-sm m-4 "
                placeholder="Email"
              />
              {errors.email && (
                <p className="   ml-2 mr-8 text-sm text-red-600  px-2">
                  * {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="sr-only bg-black bg-opacity-0"
              >
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                className="bg-black bg-opacity-0 relative block w-72 px-3 py-2 border-b border-black placeholder-black text-black focus:outline-none focus:ring-red-600 duration-500 focus:border-red-600 focus:z-10 sm:text-sm m-4 "
                placeholder="Password"
              />
              {errors.password && (
                <p className="ml-2 mr-8   text-sm text-red-600   px-2 ">
                  * {errors.password.message}
                </p>
              )}
              {errorServer && (
                <p className="ml-2 mr-8   text-sm text-red-600   px-2 ">
                  * {errorServer}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-72 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600  focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-red-600 m-4 bgbutton  ${
                  isSubmitting === true ? "bg-red-700" : "bg-red-600"
                } `}
              >
                {isSubmitting ? (
                  <>
                    Signing in...
                    <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
