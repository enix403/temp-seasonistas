'use client'
import React, { ChangeEvent, useEffect, useRef, useState } from "react";


import { MdOutlineAddAPhoto } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { AppLayout } from "~/components/AppLayout/AppLayout";
import { TitleMark } from "~/components/decorations";
import { useAuthState } from "~/app/providers/auth-state";
import { Button } from "~/components/Button/Button";




const ProfilePageContent: React.FC = () => {



    const [name, setName] = useState<string>("");
    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");

    const [isEditingPassword, setIsEditingPassword] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const fetchProfile = async () => {

    };
    useEffect(() => {
        fetchProfile()
    }, [])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            if (!file.type.startsWith("image/")) {
                toast.error("Invalid file. Please upload an image.");
                return;
            }

            handleProfileSave(file);
        } else {
            toast.error("No file selected.");
        }
    };

    const handleProfileSave = async (file?: File) => {
        if (!name || name.trim() === '') {
            toast.error("Please enter a valid user name");
            return;
        }
        const formdata = new FormData()
        setLoading(true)
        if (file)
            formdata.append('image', file)
        formdata.append("name", name)


    };




    const handlePasswordSave = async () => {


    };

    const { user } = useAuthState()

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="app-container max-w-5xl w-full mb-12">
                {/* Title */}
                <h1 className="text-4xl text-center">
                    <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
                        Profile
                        <TitleMark className="absolute w-32 top-full -left-5 dd -translate-y-2.5" />
                    </span>
                    {/* <span className="font-normal"> we are</span> */}
                </h1>

                {/* Subtitle */}
                <p className="text-center text-xl font-normal text-black/50 mt-6 max-w-2xl mx-auto">
                    Edit your profile
                </p>
            </div>
            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
                <div className="flex  flex-col space-y-4">
                    <div className="flex flex-row items-center gap-8">

                        <div
                            className={
                                "md:w-36 md:h-36 lg:mb-0 w-24 h-24 rounded-full bg-blue-500 shadow-xl overflow-hidden relative group border-white border-3"
                            }
                        >
                            <img
                                src={'/profile_empty_gradient.png'}
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className={
                                    "group-hover:opacity-100 opacity-0 transition-opacity bg-black/70 text-white absolute inset-0 flex items-center justify-center gap-x-2 font-bold text-sm"
                                }
                                disabled={loading}
                            >
                                <MdOutlineAddAPhoto size={28} /> Change
                            </button>
                            <input
                                ref={fileInputRef}
                                type='file'
                                accept='image/*'
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                                disabled={loading}
                            />
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-semibold text-gray-900">{user?.fullName}</h2>
                            <p className="text-2xl text-gray-500">{user?.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full">
                            <label className="block text-lg font-medium text-gray-700 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                value={user?.fullName}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 text-gray-700 rounded-md p-2"
                            />
                        </div>

                        <div className="flex space-x-4">
                            <Button
                                onClick={() => handleProfileSave()}
                                className="px-4 py-2 mt-2 bg-primary text-teal rounded-md hover:bg-primary/80"
                            >
                                Save Changes
                            </Button>

                        </div>
                    </div>

                </div>
            </div>

            {/* Update Password Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Update Password</h2>
                {isEditingPassword ? (
                    <div className="space-y-4 w-1/2">
                        <div className="relative">
                            <label className="block text-lg font-medium text-gray-700 mb-1">
                                Old Password
                            </label>
                            <input
                                type={showOldPassword ? 'text' : 'password'}
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="w-full border border-gray-300 text-gray-700 rounded-md p-2"
                            />
                            <span
                                onClick={() => setShowOldPassword((prev) => !prev)}
                                className="absolute right-3 top-[30px] z-[10] cursor-pointer"
                            >
                                {showOldPassword ? (
                                    <AiOutlineEyeInvisible size={24} color="#000" />
                                ) : (
                                    <AiOutlineEye size={24} color="#AFB2BF" />
                                )}
                            </span>
                        </div>
                        <div className=" relative">
                            <label className="block text-lg font-medium text-gray-700 mb-1">
                                New Password
                            </label>
                            <input
                                value={newPassword}
                                type={showNewPassword ? 'text' : 'password'}

                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full border border-gray-300 text-gray-700 rounded-md p-2"
                            />
                            <span
                                onClick={() => setShowNewPassword((prev) => !prev)}
                                className="absolute right-3 top-[30px] z-[10] cursor-pointer"
                            >
                                {showNewPassword ? (
                                    <AiOutlineEyeInvisible size={24} color="#AFB2BF" />
                                ) : (
                                    <AiOutlineEye size={24} color="#AFB2BF" />
                                )}
                            </span>
                        </div>

                        <div className="flex space-x-4">
                            <Button
                                onClick={handlePasswordSave}
                                className="px-4 py-2 mt-2 bg-primary text-white rounded-md hover:bg-primary/80"
                            >
                                Save Password
                            </Button>
                            <button
                                onClick={() => {
                                    setIsEditingPassword(false);
                                    setOldPassword("");
                                    setNewPassword("");
                                }}
                                className="px-4 py-2 mt-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsEditingPassword(true)}
                        className="px-4 py-2 mt-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                        Change Password
                    </button>
                )}
            </div>


        </div >
    );

};

export default function ProfilePage() {
    return (
        <AppLayout>
            <ProfilePageContent />
        </AppLayout>
    );
}
