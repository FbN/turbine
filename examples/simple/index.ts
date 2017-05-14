import {map, go} from "@funkia/jabz";
import {runComponent, elements} from "../../src";
const {span, input, div} = elements;

const isValidEmail = (s: string) => s.match(/.+@.+\..+/i);

function* main() {
  yield span("Please enter an email address: ");
  const {inputValue: email} = yield input();
  const isValid = map(isValidEmail, email);
  yield div([
    "The address is ", map((b) => b ? "valid" : "invalid", isValid)
  ]);
}

// `runMain` should be the only impure function in application code
runComponent("#mount", main);
