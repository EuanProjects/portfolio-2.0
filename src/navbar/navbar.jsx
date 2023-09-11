

function Navbar() {
    return (
        <>
            <nav className="flex justify-between p-6">
                <div>
                <a className="text-xl">EC</a>
                </div>
                <div className="space-x-5">
                    <a href="#"><span className="text-green text-xs font-mono">01. </span> Home</a>
                    <a href="#"><span className="text-green text-xs font-mono">02. </span> About</a>
                    <a href="#"><span className="text-green text-xs font-mono">03. </span> Projects</a>
                    <a href="#"><span className="text-green text-xs font-mono">04. </span> Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;