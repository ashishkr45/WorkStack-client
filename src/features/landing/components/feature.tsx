import { PillButton } from "../../../components/ui/buttons"
import FeatureCard from "../../../components/ui/semiCard"
import { Captions, ListChecks, UserRoundPlus } from 'lucide-react';
import DashboardPreview from "./dashboardDisp";

const FeatureSection: React.FC = () => {
	return (
		<>
			<div className="min-h-168 flex flex-col items-center">
            <PillButton label="Solutions" className="my-3" />
            <h1 className="text-4xl sm:text-5xl md:text:6xl font-semibold leading-tight max-w-4xl">
               Solve your team's
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text:6xl font-semibold leading-tight max-w-4xl">
               biggest challenges
            </h1>

            <div className="my-3 flex gap-7 ">
               <FeatureCard icon={Captions} description="Ensure your team is always on the same page with task-sharing and transparent updates." />
               <FeatureCard icon={ListChecks} description="Prioritize and manage tasks effectively so your team can focus on what matters most." />
               <FeatureCard icon={UserRoundPlus} description="Hold everyone accountable without the need for constant check-ins." />
            </div>
            <DashboardPreview />
         </div>
		</>
	)
}

export default FeatureSection