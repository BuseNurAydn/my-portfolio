
import Htext from "../shared/Htext"

type Props = {}

const Experiences = (props: Props) => {
  return (
    <section id="experiences" className="md:px-8 px-2 my-4">
      <div className="mt-6">
         <Htext>Experiences</Htext>
         <div className="grid md:grid-cols-2 px-2">
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
         </div>
      </div>
    </section>
  )
}

export default Experiences