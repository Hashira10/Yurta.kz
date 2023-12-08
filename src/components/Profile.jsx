import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                setUser(user);
            } else {
                // User is signed out.
                setUser(null);
            }
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            {user ? (
                <div>
                    <p>Email: {user.email}</p>
                    <p>User ID: {user.uid}</p>
                    {/* Add more user information as needed */}
                </div>
            ) : (
                <p>No user signed in.</p>
            )}
        </div>
    );
};

export default Profile;
