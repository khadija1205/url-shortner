import supabase, { supabaseUrl } from './supabase';

export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser() {
    const { data: session, error } = await supabase.auth.getSession();
    if (!session.session) return null;
    if (error) throw new Error(error.message);
    return session.session?.user;
}

// api for signing up the user
export async function signup({ name, email, password, profile_pic }) {
    let profile_pic_url = `${supabaseUrl}/storage/v1/object/public/profile_pic/default_profile_pic.png`;

    // Upload profile pic if provided
    if (profile_pic) {
        const fileName = `dp-${name.split(' ').join('-')}-${Math.random()}`;
        const { error: storageError } = await supabase.storage.from('profile_pic').upload(fileName, profile_pic);

        if (storageError) throw new Error(storageError.message);

        profile_pic_url = `${supabaseUrl}/storage/v1/object/public/profile_pic/${fileName}`;
    }

    // Create user with or without profile pic
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                profile_pic: profile_pic_url
            }
        }
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}
