# Use the official Golang image to build the app
FROM golang:1.22 AS build

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files
COPY ./go/go.mod ./go/go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -C ./go -o main .

# Start a new stage from scratch
FROM gcr.io/distroless/base-debian11 AS final

# Set the Current Working Directory inside the container
WORKDIR /

# Copy the Pre-built binary file from the previous stage
COPY --from=build /app/go/main .

EXPOSE 3002

# Command to run the executable
CMD ["./main"]
