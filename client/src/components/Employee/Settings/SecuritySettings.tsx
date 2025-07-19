"use client";

import { useState } from "react";
import Switch from "./Switch";
import DeleteAccountModal from "./DeleteAccountModal";
import SetPasswordModal from "./SetPasswordModal";
import OtpVerificationModal from "./OtpVerificationModal";

const SecuritySettings = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  return (
    <div className='space-y-6 px-4 sm:space-y-12 md:px-0'>
      {/* Header */}
      <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <h3 className='text-[16px] leading-[24px] font-semibold sm:text-[18px]'>
            Security
          </h3>
          <p className='mt-1 text-[14px] leading-[20px] text-[#767676] sm:text-[16px]'>
            Keep your account safe and secure with our advanced protection
            features.
          </p>
        </div>
        <button className='w-max rounded-full bg-[#559093] px-6 py-2 text-sm font-semibold text-white'>
          Save
        </button>
      </div>
      <hr className='w-full' />

      {/* Account Information */}
      <div className='flex flex-col gap-6 md:flex-row md:justify-between'>
        <div className='md:w-1/4'>
          <h3 className='text-[16px] leading-[24px] font-semibold sm:text-[18px]'>
            Account Information
          </h3>
          <p className='mt-1 text-[14px] leading-[20px] text-[#767676] sm:text-[16px]'>
            Update and manage your personal account details with ease.
          </p>
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div className='min-w-[180px] flex-1'>
              <p className='text-md mb-1 font-medium'>Email Address</p>
              <p className='text-sm text-[#767676]'>
                Verify and update your email for receiving important platform
                notifications.
              </p>
            </div>
            <p className='text-sm font-medium break-all'>fa****@gmail.com</p>
          </div>

          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div className='min-w-[180px] flex-1'>
              <p className='text-md mb-1 font-medium'>Wallet Address</p>
              <p className='text-sm text-[#767676]'>
                Connect your wallet to receive payments and manage transactions
                securely.
              </p>
            </div>
            <button className='rounded-full border border-[#EBECF0] px-4 py-1 text-xs'>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      <hr className='w-full' />
      {/* Security Settings */}

      <div className='flex flex-col gap-6 md:flex-row md:justify-between'>
        <div className='md:w-1/4'>
          <h3 className='text-[16px] leading-[24px] font-semibold sm:text-[18px]'>
            Security Settings
          </h3>
          <p className='mt-1 text-[14px] leading-[20px] text-[#767676] sm:text-[16px]'>
            Control security preferences and keep your data protected.
          </p>
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div className='min-w-[180px] flex-1'>
              <p className='text-md mb-1 font-medium'>
                Google Authenticator (2FA)
              </p>
              <p className='text-sm text-[#767676]'>
                Enable additional security using 2-factor authentication.
              </p>
            </div>
            <Switch />
          </div>

          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div className='min-w-[180px] flex-1'>
              <p className='text-md mb-1 font-medium'>Password</p>
              <p className='text-sm text-[#767676]'>
                Change your password regularly to maintain account safety.
              </p>
            </div>
            <button
              onClick={() => setShowPasswordModal(true)}
              className='rounded-full border border-[#EBECF0] px-4 py-1 text-xs'
            >
              Set Password
            </button>
          </div>
        </div>
      </div>

      <hr className='w-full' />
      {/* Delete Account */}
      <div className='flex flex-col gap-6 md:flex-row md:justify-between'>
        <div className='md:w-1/4'>
          <h3 className='text-[16px] leading-[24px] font-semibold sm:text-[18px]'>
            Delete
          </h3>
          <p className='mt-1 text-[14px] leading-[20px] text-[#767676] sm:text-[16px]'>
            Remove your account and personal data permanently.
          </p>
        </div>
        <div className='flex flex-1 flex-wrap items-start justify-between gap-4'>
          <div className='min-w-[180px] flex-1'>
            <p className='text-md mb-1 font-medium'>Account Delete</p>
            <p className='text-sm text-[#767676]'>
              Permanently delete your account and remove all data and saved
              preferences.
            </p>
          </div>
          <button
            onClick={handleDelete}
            className='rounded-full border border-[#D95057] bg-[#D950572B] px-4 py-2 text-xs text-[#D95057]'
          >
            Delete Account
          </button>
        </div>
      </div>
      {/* Modals */}
      {showDeleteModal && (
        <DeleteAccountModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => {
            setShowDeleteModal(false);
            console.log("Account deleted!");
          }}
        />
      )}

      {showPasswordModal && (
        <SetPasswordModal
          onClose={() => setShowPasswordModal(false)}
          onConfirm={data => {
            setShowPasswordModal(false);
            setShowOtpModal(true);
            console.log("Password Changed:", data);
          }}
        />
      )}

      {showOtpModal && (
        <OtpVerificationModal
          onClose={() => setShowOtpModal(false)}
          onSubmit={code => {
            console.log("OTP Entered:", code);
            setShowOtpModal(false);
          }}
        />
      )}
    </div>
  );
};

export default SecuritySettings;
