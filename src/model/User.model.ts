import mongoose from 'mongoose';
import {IUser} from "../interfaces/IUser.interface"
import { ICredentials } from '../interfaces/ICredentials';

const CredentialSchema = new mongoose.Schema<ICredentials>(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    _id: false
  }
);

const UserSchema = new mongoose.Schema<IUser>(
  {
    nombres: {
      type: String,
      required: true,
      trim: true
    },
    apellidos: {
      type: String,
      required: true,
      trim: true
    },
    nro_documento: {
      type: String,
      required: true,
      unique: true
    },
    correo: {
      type: String,
      required: true
    },
    fecha_nacimiento: {
      type: Date,
      required: true
    },
    credentials: {
      type: CredentialSchema,
      required: false
    },
    status: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  {
    timestamps: true
  }
);
UserSchema.set('collection', 'usuarios');
const User = mongoose.model('User',UserSchema)

export default User;
