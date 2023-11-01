import Setting from "./setting";

function SettingsPage() {
    return (
        <>
            <Setting go="/ISE/" iconp="settingpage"/>
            <div className="container respo-c h-screen content-between p-12 text-white flex justify-between flex-wrap">
                <div className="boxS">
                    <h1>Filter</h1>
                    <p>You can filter data by some options :</p>

                </div>

                <div className="boxS">
                    <h1>Themes</h1>
                    <p>put your favorite Efficts :</p>
                    
                </div>
                <div className="boxS">
                    <h1>Filter</h1>
                    
                </div>
                <div className="boxS">
                    <h1>Filter</h1>
                    
                </div>
            </div>
        </>    
    )
}

export default SettingsPage;