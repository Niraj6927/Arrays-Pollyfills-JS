
import {useRef} from 'react'

const useCustomEffect = (effect , deps)=>{
    const isFirstRender = useRef(true)
    const prevDeps = useRef([])
      // value of useRef persist even through re-render of the component
    // First Render Phase || Mounting Phase
    if(isFirstRender.current){
        isFirstRender.current = false
        const cleanup =effect()

        return ()=>{
            if(cleanup && typeof cleanup === "function"){
                cleanup()
            }
        }
    }

    // Deps changes and No Deps Array

    const depsChanged = deps?(
        JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    ): true;

    if(depsChanged){
        const cleanup =effect() // either Deps changed or No Deps Arrays provided to us

        return ()=>{
            if(cleanup && typeof cleanup === "function" && deps)
            {
                cleanup()
            }
        }
    }

    // Cleanup : Either when Deps Array changes or when the components get unmounted


    prevDeps.current = deps || []




}

export default useCustomEffect;