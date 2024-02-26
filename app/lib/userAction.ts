"use server"
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async(formData: FormData)=> {
    const {username, phone, email, address, isActive, isAdmin, password} = Object.fromEntries(formData)
    try {
        connectToDB()
        const newUser = new User({
            username, phone, email, password, isAdmin, isActive, address
        })
        await newUser.save()
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}
export const updateUser = async(formData: FormData)=> {
    const {id, username, phone, email, address, isActive, isAdmin, password} = Object.fromEntries(formData)
    try {
        connectToDB()
        const updateFields = {
            id, username, phone, email, password, isAdmin, isActive, address
        }
        await User.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}
export const deleteUser = async(formData: FormData)=> {
    const {id} = Object.fromEntries(formData)
    try {
        connectToDB()
        await User.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/users")
}