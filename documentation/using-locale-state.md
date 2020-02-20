# Using a state locale into some Partial Component

We can `useState` into embedable component (often named `Partial`) by
always **triggering events during state changement**:

```js
export const PasswordInput = ({
  visible = false,
  onVisibilityChange = () => null,
  ...restProps
}) => {
  const [ visible, setVisible ] = useState(visible)
  const inputRef = useRef(null)

  // We let the outside world being notified **each times**
  // the visibility change. And we are using `ref` in order
  // to give the DOM element ot the callback.
  useEffect(() => {
    onVisibilityChange(inputRef.current)
  }, [ visible, inputRef.current ])

  return (
    <>
    {
      visible
        ? <input type="text" {...restProps} ref={inputRef} /> 
        : <input type="password" {...restProps} ref={inputRef} />
    }
    <button onClick={e => setVisible(!visible)}>eyes</button>
    </>
  )
}
```
