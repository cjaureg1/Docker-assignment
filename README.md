# Agile Login Prototype
A one-page classroom login demo served with Nginx in Docker.

## User story
As a returning user, I want to enter my login details, so that I can reach the application.

## Acceptance criteria
- One page has an email field, a password field, and a Log in button.
- Missing fields show a clear validation message.
- Invalid email format and incorrect details show clear messages.
- The made-up credentials below show a success message.
- Password text is masked and is cleared after each attempt.
- No credentials are saved and no real authentication occurs.

## Run on your computer
Start Docker Desktop. Download this repository through **Code → Download ZIP**, unzip it, and open Terminal in the folder containing Dockerfile.
```sh
docker --version
docker build -t hello-docker .
docker run -d -p 8080:80 --name login-prototype hello-docker
```
Open http://localhost:8080.
Demo email: `demo@example.com`. Demo password: `Demo123!`.

## Review and submission
1. Show empty-field, incorrect-detail, and successful-login states to a customer/classmate.
2. Record their actual feedback and make one small change. If you change the HTML, rebuild the image and recreate the container.
3. Capture the page running at localhost:8080.
4. Submit this repository link, your GitHub Project board link, the Docker screenshot, and one truthful sentence about feedback and the change.

The initial wireframe is [docs/login-sketch.svg](docs/login-sketch.svg).
See [docs/submission.md](docs/submission.md) for the checklist.

## Board
Create a GitHub Project with **To Do**, **Doing**, and **Done**.
Add the login user story and the sketch, build, and test issues from this repository. Assign actual teammates and move cards as work progresses.

## Clean up
```sh
docker stop login-prototype
docker rm login-prototype
# Optional:
docker rmi hello-docker
```

## Automated checks
The GitHub Actions workflow builds the Docker image, starts the container, checks HTTP delivery, and tests empty fields, invalid email, incorrect credentials, and successful login in Chromium. It saves a screenshot and browser test report as a workflow artifact.
A CI screenshot is evidence of the CI container; the class submission may still require a screenshot from your own computer.

