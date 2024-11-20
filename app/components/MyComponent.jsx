"use client";

import * as React from "react";

const Image = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const ProfileSection = () => (
  <div className="profile-section">
    <Image
      src="/images/download.svg"
      alt="Profile Icon"
      className="profile-icon"
    />
    <div>Download App</div>
  </div>
);

const GreetingSection = () => (
  <div className="greeting-section">
    <div className="status-indicator" />
    <div>Hi, Ravi</div>
  </div>
);

const HeaderSection = () => (
  <header className="header-section">
    <Image
      src= "/images/logo.png"
      alt="Company Logo"
      className="company-logo"
    />
    <Image
      src="/images/24_7.svg"
      // src="https://cdn.builder.io/api/v1/image/assets/TEMP/34da46a144249bd2f132ac3123ff0b13adf40bc92703f776ff46f6ba6ff08cef?placeholderIfAbsent=true&apiKey=5299d5c9e20d4bc0bef28a963c1faf2c"
      alt="Promotional Banner"
      className="promotional-banner"
    />
    <div className="actions-section">
      <ProfileSection />
      <GreetingSection />
    </div>
  </header>
);

const MainSection = () => (
  <main>
    <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e9cfdc46cca9f17eb690e253839c97229715a31ee261654f601cc6f823b047b?placeholderIfAbsent=true&apiKey=5299d5c9e20d4bc0bef28a963c1faf2c"
      alt="Main Content Image"
      className="main-content-image"
    />
  </main>
);

const MyComponent = () => (
  <>
    <HeaderSection />
    <MainSection />

    <style jsx>{`
      .header-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1371px;
        gap: 20px;
        flex-wrap: wrap;
        margin: auto;
      }

      @media (max-width: 991px) {
        .header-section {
          max-width: 100%;
        }
      }

      .company-logo {
        width: 200px;
        border-radius: 8px;
        max-width: 100%;
      }

      .promotional-banner {
        width: 353px;
        margin: auto 0;
      }

      .actions-section {
        display: flex;
        gap: 40px;
      }

      .profile-section {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .profile-icon {
        width: 44px;
      }

      .greeting-section {
        display: flex;
        flex-direction: column;
      }

      .status-indicator {
        background-color: rgba(56, 176, 0, 1);
        box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.15);
        border-radius: 50%;
        width: 41px;
        height: 41px;
      }

      @media (max-width: 991px) {
        .status-indicator {
          margin-right: 5px;
        }
      }

      .main-content-image {
        width: 100%;
        margin-top: 27px;
      }

      @media (max-width: 991px) {
        .main-content-image {
          max-width: 100%;
        }
      }
    `}</style>
  </>
);

export default MyComponent;
