import { ProcessStepType } from "../HowWeWork";

type ProcessStepProps = {
    step:ProcessStepType;
    index:number;
}

export function ProcessStep({ step, index }: ProcessStepProps) {
    const IconComponent = step.icon;
    return (
        <div 
                key={step.id} 
                className={`flex flex-col items-center transition-all duration-500 z-10 relative`}
              >

                <div className="w-20 h-20 bg-gradient-to-b from-[#63971a] to-[#86bc39] rounded-[26px] flex items-center justify-center text-white mb-[18px] shadow-lg shadow-[#59ab4c]/20 relative group overflow-hidden">
                  <span className='absolute bg-[#7eb12d] w-[45%] h-[90%] rotate-[-45deg] rounded-full right-[-20%] top-[-2px]'/>
                  <IconComponent className="w-8 h-8 stroke-[1.5] drop-shadow-sm" />
                </div>

                {step.follwedByArrow && (
                  <div className={`absolute bottom-5/7 ${index == 0 ? 'rotate-[-2deg]' : 'rotate-[1deg]'} translate-y-[-12px] left-3/5 scale-110 ${!!step.inverted ? 'translate-y-[26px]' : ''}`}>
                    <step.follwedByArrow />
                  </div>
                )}

                <h3 className="text-[16px] font-semibold text-[#0f172a] tracking-tight font-['Inter']">
                  {step.title}
                </h3>
                <p className="text-[14px] max-w-[200px] leading-relaxed font-['Inter'] text-[#98989A]">
                  {step.description}
                </p>
              </div>
    );
}