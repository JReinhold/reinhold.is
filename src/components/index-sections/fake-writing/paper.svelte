<script lang="ts">
  const predefinedText: string = `Dear Jeppe,

I actually think you are a pretty nice guy. I'm regularly amazed by your amount of creativity and the stuff you can come up with.
You have a knack for trying weird stuff out, and see how it goes. It doesn't always end in a good way, but you manage to keep trying anyway, and that's what I admire the most about you!

Things I like about you: 👍
- You always make people around you smile 😊
- You are firm in your beliefs, but also open to hear the ideas of others 

Things I don't like about you: 👎
- You are better than me at most things 😒
- Sometimes you THINK you know what I'm thinking, when you actually get it all wrong 😤

But it doesn't matter, cuz I still think you're awesome! 💪
Sincerely yours, `;
  let text = predefinedText.substring(0, 38);
  const maxLength = predefinedText.length + 30;

  const fixEmojis = (nextLength: number, previousLength: number) => {
    const isEmoji = predefinedText.charCodeAt(nextLength - 1) > 1000;
    if (!isEmoji) {
      return nextLength;
    }
    //if the last character is an emoji we need to skip the cursor one more because emojis are 2 characters
    // if we're deleting skip one backwards, otherwise skip forward
    return nextLength < previousLength ? nextLength - 1 : nextLength + 1;
  };

  const onInput: svelteHTML.FormEventHandler<HTMLTextAreaElement> = (event) => {
    const textArea = event.currentTarget as HTMLTextAreaElement;
    const prevLength =
      (textArea.textContent && textArea.textContent.length) || 0;
    const nextLength = textArea.value.length;

    const isWritingNameAtEnd = nextLength > predefinedText.length;
    const isEditingPredefinedText =
      textArea.value.substr(0, predefinedText.length) !== predefinedText;
    if (isWritingNameAtEnd && !isEditingPredefinedText) {
      // pass any characters to the state if after end of text
      text = textArea.value;
      return;
    }

    const inputLength = fixEmojis(nextLength, prevLength);
    text = predefinedText.substring(0, inputLength);
  };
</script>

<div class="container">
  <div class="paper">
    <textarea
      class="text-area"
      on:input={onInput}
      bind:value={text}
      maxlength={maxLength}
    />
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .paper {
    position: relative;
    cursor: text;
    width: 100%;
    max-width: 34rem;
    /* shadow around paper */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
    /* slight border around paper, to "make it pop" */
    border: 1px solid #b5b5b577;
    /* top whitespace, followed by repeating blue lines */
    background: linear-gradient(white, white) 0 0 / 100% 65px no-repeat,
      linear-gradient(#dfe8ec 0%, white 8%) 0 65px / 100% 30px;
  }
  /* shadow at the bottom of the paper */
  .paper::before {
    position: absolute;
    z-index: -1;
    content: '';
    width: 40%;
    height: 10px;
    left: 12px;
    bottom: 0px;
    transform: skew(-5deg) rotate(-5deg);
    transform-origin: bottom left;
    background: transparent;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  .paper::after {
    left: auto;
    right: 12px;
    transform-origin: bottom right;
    transform: skew(5deg) rotate(5deg);
  }

  .text-area {
    font-size: 1em;
    line-height: 30px;
    border: none;
    border-left: solid 1px #f8d3d3;
    background: none;
    resize: none;
    overflow: hidden;
    margin: 0 0 -4px 10%;
    padding: 73px 1% 0 1%;
    width: calc(100% - 10% - 1% - 1%);
    min-height: 720px;
  }
  .text-area:focus {
    outline: none;
  }
</style>
