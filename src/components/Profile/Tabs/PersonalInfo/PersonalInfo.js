import { useContext } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

export const PersonalInfo = () => {
    const { userInfo, user } = useContext(AuthContext)

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="space-y-8 py-4">
                <div className="space-x-4">
                    <FontAwesomeIcon icon={solid('envelope')} size='xl' />
                    <div className="inline-block align-middle">
                        <span className="text-sm font-medium text-slate-700">
                            Correo electrónico
                        </span>
                        <p>{user.email}</p>
                    </div>
                </div>

                <div className="space-x-4">
                    <FontAwesomeIcon icon={solid('house-user')} size='xl' />
                    <div className="inline-block align-middle">
                        <span className="text-sm font-medium text-slate-700">
                            Dirección
                        </span>
                        <p>{userInfo.address}</p>
                    </div>
                </div>

                <div className="space-x-4">
                    <FontAwesomeIcon icon={solid('phone')} size='xl' />
                    <div className="inline-block align-middle">
                        <span className="text-sm font-medium text-slate-700">
                            Teléfono
                        </span>
                        <p>{userInfo.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}