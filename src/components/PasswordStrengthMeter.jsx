import React from "react";
import zxcvbn from "zxcvbn";
export const PasswordStrengthMeter = ({ password }) => {
    const result = zxcvbn(password)
    const strengthPoint = result.score * 100/4        
    const strengthColor = () => ({
        width: `${strengthPoint}%`,
        background: strengthPoint > 75 ? 'green' :
            strengthPoint > 50 ? 'lime' :
            strengthPoint > 25 ? 'yellow' :
            strengthPoint > 0 ? 'red' :
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
