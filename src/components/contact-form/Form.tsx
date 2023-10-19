"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

type Inputs = {
    Name: string;
    Email: string;
    Phone: number;
    Reason: string[];
    Address: string;
    TextArea: string;
};

const ErrorMessage = styled.span`
    color: red;
    font-size: small;
`

export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    // console.log(watch("Reason"));

    return (
        <>
            <div className="flex flex-col justify-center items-start gap-5 px-10">
                <div className="flex flex-col justify-center items-start gap-2">
                    <h1 className="text-xl font-bold">Contact Me</h1>
                    <p>
                        Have a question about something that is not covered in
                        my services pages? Please fill out the contact form and
                        I will be happy to help you out. You can expect to hear
                        back from us within 24 hours.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-start items-start gap-5"
                >
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">Name</label>
                        <input
                            type="text"
                            placeholder="Full name"
                            {...register("Name", { required: true })}
                            className="border rounded-none px-5 py-2"
                        />
                        {errors.Name && <ErrorMessage>This field is required</ErrorMessage>}
                    </div>

                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("Email", { required: true })}
                            className="border rounded-none px-5 py-2"
                        />
                        {errors.Email && <ErrorMessage>This field is required</ErrorMessage>}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">Phone</label>
                        <input
                            type="tel"
                            placeholder="Phone number"
                            {...register("Phone", { required: true })}
                            className="border rounded-none px-5 py-2"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            What brings you here?
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
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                value={"Interested in investment properties"}
                                {...register("Reason", { required: true })}
                                className="border"
                            />
                            <span>Interested in investment properties</span>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                value={"Other"}
                                {...register("Reason", { required: true })}
                                className="border"
                            />
                            <span>Other</span>
                        </div>
                        {errors.Reason && <ErrorMessage>This field is required</ErrorMessage>}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">Address</label>
                        <input
                            type="text"
                            placeholder="Please fill this out if you have selected looking to sell"
                            {...register("Address", { required: true })}
                            className="border rounded-none px-5 py-2"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            Anything else you would like me to know?
                        </label>
                        <textarea
                            cols={40}
                            rows={5}
                            {...register("TextArea", { required: true })}
                            className="border"
                        />
                    </div>

                    <input type="submit" className="cursor-pointer bg-[#000] p-2 rounded-md text-white" />
                </form>
            </div>
        </>
    );
}
