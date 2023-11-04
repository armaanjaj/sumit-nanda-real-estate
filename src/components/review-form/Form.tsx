"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

type Inputs = {
    name: string;
    comment: string;
    rating: string;
};

const RedMessage = styled.span`
    color: red;
    font-size: small;
`;

const REVIEW_FORM_URL = "/api/review";

export default function ReviewForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        e?.preventDefault();

        axios
            .post(REVIEW_FORM_URL, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.data.success) {
                    toast(response.data.message);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    toast(response.data.message);
                }
            })
            .catch((error) => console.log(error))
            .finally();

        reset();
    };

    return (
        <>
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-start items-start gap-5"
            >
                <div className="flex flex-col justify-start items-start gap-2">
                    <label className="text-lg font-bold">
                        Name&nbsp;<RedMessage>*</RedMessage>
                    </label>
                    <input
                        type="text"
                        placeholder="Full name"
                        {...register("name", { required: true })}
                        className="border rounded-none px-5 py-2 text-black"
                    />
                    {errors.name && (
                        <RedMessage>This field is required</RedMessage>
                    )}
                </div>

                <div className="flex flex-col justify-start items-start gap-2">
                    <label className="text-lg font-bold">
                        Rating (1 - 5)&nbsp;<RedMessage>*</RedMessage>
                    </label>
                    <input
                        type="number"
                        min={1}
                        max={5}
                        placeholder="Rating"
                        {...register("rating", { required: true })}
                        className="border rounded-none px-5 py-2 text-black"
                    />
                    {errors.rating && (
                        <RedMessage>This field is required</RedMessage>
                    )}
                </div>

                <div className="flex flex-col justify-start items-start gap-2">
                    <label className="text-lg font-bold">
                        Review&nbsp;<RedMessage>*</RedMessage>
                    </label>
                    <textarea
                        cols={30}
                        rows={5}
                        placeholder="Write a review"
                        {...register("comment", { required: true })}
                        className="border text-black px-5 py-2"
                    />
                    {errors.comment && (
                        <RedMessage>This field is required</RedMessage>
                    )}
                </div>
                <input
                    type="submit"
                    className="cursor-pointer bg-[#000] p-2 rounded-sm text-white"
                />
            </form>
        </>
    );
}
