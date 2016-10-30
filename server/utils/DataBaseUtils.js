import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Hello';

const Hello = mongoose.model('Hello');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listHellos(id) {
    return Hello.find();
}

export function createHello(data) {
    const hello = new Hello({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return hello.save();
}

export function deleteHello(id) {
    return Hello.findById(id).remove();
}

