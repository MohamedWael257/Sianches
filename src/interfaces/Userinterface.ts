export interface UserData {
    id: number,
    full_name: string,
    avatar: string,
    image: string,
    phone_code: number,
    phone: number,
    email: string,
    user_type: string,
    gender: null | string,
    is_active: boolean,
    is_ban: boolean,
    ban_reason: null | string,
    role_id: null | number,
    token: string,
    created_at: string,
    referral_code: string
}

export interface AuthContextType {
    currentUser: UserData | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserData | null>>;
    loading: null | boolean;
}
