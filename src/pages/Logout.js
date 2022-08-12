export default function Logout() {
    sessionStorage.clear();
    window.location = '/';
}
