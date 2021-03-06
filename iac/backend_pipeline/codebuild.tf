resource aws_codebuild_project backend_build_project {
  name          = "${var.application_name}_backend_${var.environment}"
  description   = "codebuild stage"
  service_role  = aws_iam_role.codebuild_backend.arn
  build_timeout = var.build_timeout

  artifacts {
    type = "CODEPIPELINE"
  }

  cache {
    type     = "S3"
    location = "${var.codebuild_bucket_name}-${var.environment}/_cache/archives"
  }

  source {
    type      = "CODEPIPELINE"
    buildspec = "ecr_buildspec.yaml"
  }

  environment {
    compute_type    = "BUILD_GENERAL1_SMALL"
    image           = var.codebuild_image
    type            = "LINUX_CONTAINER"
    privileged_mode = true

    environment_variable {
      name  = "AWS_ACCOUNT_ID"
      value = var.aws_account_id
    }

    environment_variable {
      name  = "ENV"
      value = var.environment
    }

    environment_variable {
      name  = "GITHUB_TOKEN"
      value = var.github_token
    }

    environment_variable {
      name  = "DOCKER_ID"
      value = var.docker_hub_id
    }

    environment_variable {
      name  = "DOCKER_PASSWORD"
      value = var.docker_hub_password
    }

    environment_variable {
      name  = "DATREE_TOKEN"
      value = var.datree_token
    }

    environment_variable {
      name = "THIRD_PARTY_SCANNER_TOKEN"
      value = var.snyk_token
    }
  }

  tags = {
    Name = "${var.application_name}-backend-codebuild-${var.environment}"
    Environment = var.environment
  }
}