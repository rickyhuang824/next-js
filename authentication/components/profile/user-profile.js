import { useSession } from "next-auth/react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useRouter } from "next/router";

function UserProfile() {
    return (
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm />
        </section>
    );
}

export default UserProfile;
