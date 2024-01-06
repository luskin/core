import auth from "@/libs/auth"
import { loginRoute } from "@/router/unauthenticated.routes"
import { Button } from "@repo/ui"
import { useNavigate } from "@tanstack/react-router"

export default function LoginPage() {
  const navigate = useNavigate()
  const search = loginRoute.useSearch()
  const redirect = search.redirect

  const onClickHandler = async () => {
    await auth.signInWithEmailAndPassword("gregg@mothership.com", "testing")
    if (redirect) {
      // TODO - Enable redirect to the original location
    }

    navigate({
      to: "/ship",
    })
  }

  return <Button onClick={onClickHandler}>Login</Button>
}
