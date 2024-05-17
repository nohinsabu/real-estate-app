import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAM1BMVEW6urr////W1ta3t7f8/Pz5+fm+vr7Ozs60tLTHx8fm5ubz8/Pv7+/s7OzLy8vCwsLf399T08RcAAADT0lEQVR4nO2ai26sIBBAheEhqMD/f+2FqlfrZl1BHDbpnKabtGmakxmeM3QdQRAEQRAEQRAEQRBERMWvLwSg73tYPlvL7IhKyvAwjcMwjFPgRsGX+AF4Pkm2R07cf4EdgAlSMJGUxPIdP4QMprmdmdiqtTH/NJm2avZ3Mn8jbEMzLQ8BO7gxqRuZAT8Tm1MreItBB509N1uwXQO7a2pJDhuwx8n5Nq8WOXAQLkYtEXDldIYaY6iz1Zwta69IxFW4n7LU4hbRY6lBXkYTGm3IjZlmgo1IZj3PDhtjHCer/VDgNqC4gSlQY8xgjLisZXcDZQFWJSmNSUW4goG7so2+IhyCW8ksTSCc5MAWxg3hOAK5C+8KxvKbt81vyOfVVFlKY1Kfn6i+UI0x/6fdynasdBb523H75rnQlW2ncUNFWHtz7worE4Jb2REJ5ZD0zXt97t10BeeOWrbZo9y0CpOKkVLVqSI3nL4IXK287cEqdBlxqfS2IVBuCzM20w2zeKlEZtww9tKF7L0Bs3KZOR0wK76QTkpX0yrS6Qiz4gsZO5dEKdPs0dciF/8Kv28E+lpSBV45dSfnrpyAB9ekiwr+s9zgmzV4P3QCBW8l1qW8nt0epjb5nFFpSryzm9IkaP1exK2N8f9vCeKaZtEOHqdA37kwDnLWEnIYg+v61o8cNqDzTmvOudbOt+g0n5DGFSxf7UcZUQfYaK2y8KOilDfOpZmQ0M4Zr9Qy9NqJqWhkp7h8HN4jxYVkslynx2ZtvAy366L2ZjuVg+XYfnE14/tXUi/Xrv0vpOVYK14cSOBOn2+9EnewNCyfN/OhpOIrgn/arlchhSzXLv29DOrRvrgqLajOhOcC1+vSGvnKoJ8JHaiS2tYRqx6YsmDuBm1mqH+T7nVp3/SIrJ3XgidI76l7m4a5wlDaytoQcxWiolzVqCXqyYE/f8ebi2Cy2nX/5yVNPbn0n2q9sinurp1Rp8qaUwa8TqWCYY3t4JUaVf2fsNWcCQlRJ3D9M2GLgauwPdSO2Yq4bVbcZv7M7a5lUdPvGrc7Iqr0Sdlnxrvrrz+9gd5ByJsPbUpfV16Su1kOfnAq3J4M5EZu5EZu5EZu5EZu5EZu5EZu5EZu5EZu5Ibo9g9gcyvT5ePTnAAAAABJRU5ErkJggg=="
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;