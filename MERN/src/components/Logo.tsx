import logo from '../assets/images/BojaLogo.svg'

export default function Logo({ width }: { width: boolean }) {
    return (
        <img
            src={logo}
            alt="developers"
            className={width ? 'logo logo-bsidebar' : 'logo'}
        />
    )
}
