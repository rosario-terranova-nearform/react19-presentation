import ClientComponent from "@/features/ClientComponent";
import ServerComponent from "@/features/ServerComponent";
import ServerAction from "@/features/ServerAction";
import ServerActionFormStatus from "@/features/ServerActionFormStatus";
import ServerActionState from "@/features/ServerActionState";
import ServerActionOptimistic from "@/features/ServerActionOptimistic";

export default function Home() {
  return (
    <div>
      Hello World
      {/* <ServerComponent /> */}
      {/* <ClientComponent /> */}
      {/* <ServerAction /> */}
      {/* <ServerActionFormStatus /> */}
      {/* <ServerActionState /> */}
      <ServerActionOptimistic />
    </div>
  );
}
