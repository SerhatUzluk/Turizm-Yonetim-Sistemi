import React from "react";
import { useSelector } from "react-redux";
import zxcvbn from "zxcvbn";
export const PasswordStrengthMeter = () => {
    const strength = useSelector((state) => state.password.strength);    

    const strengthColor = () => ({
        width: `${strength}%`,
        background: strength > 75 ? 'green' :
            strength > 50 ? 'lime' :
            strength > 25 ? 'yellow' :
            strength > 0 ? 'red' :
            'gray',
        height: '7px'        
    }
)
  return (
    <>
      <div className="bg-gray-200 h-4 rounded overflow-hidden h-[7px]" >
        <div className="bg-blue-500 h-full" style={strengthColor()}>            
        </div>
      </div>
    </>
  );
};
