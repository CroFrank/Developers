import bcrypt from 'bcryptjs';
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(password, salt);
    return hash;
};
