variable "profile" {
  description = "AWS profile"
  type        = string
}

variable "region" {
  description = "aws region to deploy to"
  default = "eu-west-1"
  type        = string
}

variable "application_name" {
  description = "The name of the application"
  default = "orders"
  type = string
}

variable "environment" {
  description = "Applicaiton environment"
  default = "dev"
  type = string
}

variable "github_secret_name" {
  type        = string
}

variable "docker_secret_name" {
  type        = string
}

variable "datree_secret_name" {
  type        = string
}

variable "snyk_secret_name" {
  description = "Snyk token"
  type = string
}

variable "branch_name" {
  description = "The repository source branch for the pipeline"
  default = "main"
  type = string
}

variable "aws_account_id" {
  description = "AWS Account ID"
  type = number 
}