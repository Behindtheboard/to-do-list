export default function currentDate() {
    return new Date().toJSON().slice(0, 10);
}