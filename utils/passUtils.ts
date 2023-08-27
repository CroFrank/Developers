import bcrypt from 'bcryptjs'

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(password, salt);
    return hash
}

export const comparePasswords = async (password: string, hashedpassword: string) => {
    const isTheSame = await bcrypt.compare(password, hashedpassword)
    return isTheSame
}