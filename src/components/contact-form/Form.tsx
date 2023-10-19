"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
    Name: string;
    Email: string;
    Phone: number;
    Reason: string[];
    Address: string;
    TextArea: string;
    TermsAndCondition: boolean;
};

const RedMessage = styled.span`
    color: red;
    font-size: small;
`;

export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        e?.preventDefault();
        console.log(data);
        reset()
        toast("Form submitted successfully");
    };

    // console.log(watch("Reason"));

    return (
        <>
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
            <div className="flex flex-col justify-center items-start gap-5">
                <div className="flex flex-col justify-center items-start gap-2">
                    <h1 className="text-xl font-bold">Contact Me</h1>
                    <p>
                        Have a question about something? Please fill out the
                        contact form and I will be happy to help you out. You
                        can expect to hear back from us within 24 hours.
                    </p>
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
                            {...register("Name", { required: true })}
                            className="border rounded-none px-5 py-2 text-black"
                        />
                        {errors.Name && (
                            <RedMessage>This field is required</RedMessage>
                        )}
                    </div>

                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            Email&nbsp;<RedMessage>*</RedMessage>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("Email", { required: true })}
                            className="border rounded-none px-5 py-2 text-black"
                        />
                        {errors.Email && (
                            <RedMessage>This field is required</RedMessage>
                        )}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">Phone</label>
                        <input
                            type="tel"
                            placeholder="Phone number"
                            {...register("Phone")}
                            className="border rounded-none px-5 py-2 text-black"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            What brings you here?&nbsp;
                            <RedMessage>*</RedMessage>
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                value={"Looking to sell"}
                                {...register("Reason", { required: true })}
                                className="border"
                            />
                            <span>Looking to sell</span>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                value={"Looking to buy"}
                                {...register("Reason", { required: true })}
                                className="border"
                            />
                            <span>Looking to buy</span>
                        </div>
                        {errors.Reason && (
                            <RedMessage>This field is required</RedMessage>
                        )}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            Address (if looking to sell)
                        </label>
                        <input
                            type="text"
                            {...register("Address")}
                            className="border rounded-none px-5 py-2 text-black"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            Anything else you would like to talk about?
                        </label>
                        <textarea
                            cols={40}
                            rows={5}
                            {...register("TextArea")}
                            className="border text-black px-5 py-2"
                        />
                    </div>

                    <div className="flex flex-row justify-start items-center gap-2">
                        <input
                            type="checkbox"
                            value={"true"}
                            {...register("TermsAndCondition", {
                                required: true,
                            })}
                        />{" "}
                        I agree to be contacted by Sumit Nanda Real Estate via
                        call, email or text.
                    </div>
                    {errors.TermsAndCondition && (
                        <RedMessage>Please agree to the terms</RedMessage>
                    )}
                    <input
                        type="submit"
                        className="cursor-pointer bg-[#000] p-2 rounded-md text-white"
                    />
                </form>
            </div>
        </>
    );
}
