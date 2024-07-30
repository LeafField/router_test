export type State<T> =
  | {
      type: "pending";
      promise: Promise<T>;
    }
  | {
      type: "fulfilled";
      result: T;
    }
  | {
      type: "rejected";
      error: undefined;
    };

class PromiseWrapper<T> {
  public state: State<T>;

  constructor(promise: Promise<T>) {
    const p = promise
      .then((result) => {
        this.state = {
          type: "fulfilled",
          result: result,
        };
        return result;
      })
      .catch((err) => {
        this.state = {
          type: "rejected",
          error: err,
        };
        throw new Error(err);
      });
    this.state = {
      type: "pending",
      promise: p,
    };
  }

  get(): T {
    switch (this.state.type) {
      case "pending":
        throw this.state.promise;
      case "fulfilled":
        return this.state.result;
      case "rejected":
        throw new Error(this.state.error);
    }
  }
}

async function fetchTestData(rejected: boolean = false) {
  try {
    const text = await new Promise<string>((resolve, reject) =>
      setTimeout(() => {
        if (rejected) {
          reject("失敗です。");
        } else {
          resolve("成功です。");
        }
      }, 1500)
    );
    return text;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
  }
}

let executingPromise: PromiseWrapper<string | undefined> | undefined;

export function fetchData(
  rejected: boolean = false
): PromiseWrapper<string | undefined> {
  if (!executingPromise) {
    executingPromise = new PromiseWrapper(fetchTestData(rejected));
  }
  return executingPromise;
}

export function resetFetchData() {
  if (executingPromise) {
    executingPromise = undefined;
  }
}
