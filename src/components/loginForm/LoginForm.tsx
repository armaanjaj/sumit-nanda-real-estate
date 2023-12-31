"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Inputs = {
    email: string;
    password: string;
};

const RedMessage = styled.span`
    color: red;
    font-size: small;
`;

const LOGIN_FORM_URL = "/api/users/login";

export default function LoginForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
        e?.preventDefault();

        axios
            .post(LOGIN_FORM_URL, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.data.success) {
                    toast(response.data.message);
                    router.push("/admin");
                }
            })
            .catch((error) => {
                console.error(error);
                toast(error.response?.data?.error || "An error occurred");
            })
            .finally(() => {
                reset();
            });
    };

    return (
        <>
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center gap-5"
            >
                <div className="flex flex-col justify-start items-start gap-2">
                    <label className="text-lg font-bold">
                        Email&nbsp;<RedMessage>*</RedMessage>
                    </label>
                    <input
                        type="text"
                        placeholder="email"
                        {...register("email", { required: true })}
                        className="border rounded-none px-5 py-2 text-black outline-[grey]"
                    />
                    {errors.email && (
                        <RedMessage>This field is required</RedMessage>
                    )}
                </div>

                <div className="flex flex-col justify-start items-start gap-2">
                    <label className="text-lg font-bold">
                        Password&nbsp;<RedMessage>*</RedMessage>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                        className="border rounded-none px-5 py-2 text-black outline-[grey]"
                    />
                    {errors.password && (
                        <RedMessage>This field is required</RedMessage>
                    )}
                </div>
                <input
                    type="submit"
                    value={"Login"}
                    className="cursor-pointer bg-[#000] p-2 rounded-sm text-white hover:bg-gray-800 transition"
                />
                <div className="flex flex-row justify-evenly items-center my-1 w-full">
                    <span className="w-1/3 bg-slate-300 h-1 rounded-full"></span>
                    <span>OR</span>
                    <span className="w-1/3 bg-slate-300 h-1 rounded-full"></span>
                </div>
                <Link
                    href={"/admin/signup/"}
                    className="px-3 py-1 rounded-md bg-red-600 text-white"
                >
                    Create new account
                </Link>
            </form>
        </>
    );
}
