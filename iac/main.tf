# GitHub secrets
data "aws_secretsmanager_secret" "github_secret" {
  name = var.github_secret_name
}

data "aws_secretsmanager_secret_version" "github_token" {
  secret_id = data.aws_secretsmanager_secret.github_secret.id
}

# Docker secrets
data "aws_secretsmanager_secret" "docker_secret" {
  name = var.docker_secret_name
}

data "aws_secretsmanager_secret_version" "docker_creds" {
  secret_id = data.aws_secretsmanager_secret.docker_secret.id
}

# Datree secret
data "aws_secretsmanager_secret" "datree_secret" {
  name = var.datree_secret_name
}

data "aws_secretsmanager_secret_version" "datree_token" {
  secret_id = data.aws_secretsmanager_secret.datree_secret.id
}

# Snyk secret
data "aws_secretsmanager_secret" "snyk_secret" {
  name = var.snyk_secret_name
}

data "aws_secretsmanager_secret_version" "snyk_token" {
  secret_id = data.aws_secretsmanager_secret.snyk_secret.id
}

# Backend Pipeline
module "backend_pipeline" {
  source = "./backend_pipeline"
  application_name = var.application_name
  pipeline_bucket_name = "${var.application_name}-codepipeline"
  codebuild_bucket_name = "${var.application_name}-codebuild"
  github_org = "LukeMwila"
  repository_name = "microservice-orders"
  branch_name = var.branch_name
  environment = var.environment
  aws_account_id = var.aws_account_id
  github_token = jsondecode(data.aws_secretsmanager_secret_version.github_token.secret_string)["GitHubPersonalAccessToken"]
  docker_hub_id = jsondecode(data.aws_secretsmanager_secret_version.docker_creds.secret_string)["DOCKER_ID"]
  docker_hub_password = jsondecode(data.aws_secretsmanager_secret_version.docker_creds.secret_string)["DOCKER_PW"]
  datree_token = jsondecode(data.aws_secretsmanager_secret_version.datree_token.secret_string)["token"]
  snyk_token = jsondecode(data.aws_secretsmanager_secret_version.snyk_token.secret_string)["SNYK_AUTH_TOKEN"]
}